import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Log de la requête pour debug
      console.log("📋 Nouvelle soumission de formulaire:", req.body);
      
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log de la soumission réussie
      console.log("✅ Soumission sauvegardée avec succès:", {
        id: submission.id,
        email: submission.email,
        fullName: submission.fullName
      });
      
      res.json({ 
        success: true, 
        message: "Votre demande a été envoyée avec succès! Un email va s'ouvrir automatiquement pour envoyer vos informations.",
        submissionId: submission.id,
        data: submission
      });
    } catch (error) {
      console.error("❌ Erreur lors de la soumission:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Données invalides. Veuillez vérifier vos informations.",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Erreur interne du serveur. Veuillez réessayer."
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({
        success: true,
        count: submissions.length,
        data: submissions
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des soumissions:", error);
      res.status(500).json({
        success: false,
        message: "Erreur lors de la récupération des soumissions"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      message: "Serveur TOTCHEME SANTÉ ET VIE en ligne",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
