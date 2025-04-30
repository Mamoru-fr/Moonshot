<h1 align='center'>Moonshot</h1>
<h2 align='center'> Fonctional Specification Document </h2>

---

<h3 align='center'>DOCUMENT VERSION 1.0</h3>
<h3 align='center'>04/16/2025</h3>

---

<h3>Document History</h3>

|    Date    | Version | Document Revision Description |
| :--------: | :-----: | :---------------------------- |
| 04/16/2025 |   1.0   | <li>Created the document</li> |

---

<details> 

<summary>Table of content</summary>

- [I. Overview](#i-overview)
  - [A. Product Description](#a-product-description)
  - [B. Product Functional Capabilities](#b-product-functional-capabilities)
    - [Accounting Functionalities](#accounting-functionalities)
      - [Consultation \& Search](#consultation--search)
  - [C. Project Organisation](#c-project-organisation)
- [II. Requierements](#ii-requierements)
  - [A. Functional Requierements](#a-functional-requierements)
  - [B. Non-functional Requierements](#b-non-functional-requierements)
  - [C. Persona Definition](#c-persona-definition)
  - [D. Use Cases Analysis](#d-use-cases-analysis)
- [Glossary](#glossary)

</details>

---

# I. Overview

## A. Product Description

The product should be a web application that is usable as both a desktop app and a web app for Apple OS (iOS, iPadOS, macOS), Android, and Windows. The application must combine accounting functions and management functions that are available in other software. The aim is to create an intuitive application that will serve as a company's assistant to understand the organization's situation well, to simulate future scenarios, and to generate all the necessary accounting and management documents. 

## B. Product Functional Capabilities

The product should be able to have a lot of functionality.

### Accounting Functionalities

As might be expected, the application must be able to offer a wide range of accounting-related functionalities. 

#### Consultation & Search

To correctly input any data, any user should be able to consult all items inputted in the database.

For this purpose, with an functionality, the user should have an interface to check all data related to a company or customer's account.


* Consultation
  * Accounts consultation, 
  * Accounting entry search
* Inputs
  * Guide inputs
  * Journal & Practical inputs,
* Treasury
    * Bank reconciliations
* Return
  * Tax return
* Management & Closing 
  * Journal Management
  * Financial year Management with Closing option
  * Financial year export

## C. Project Organisation

# II. Requierements

## A. Functional Requierements

This project focuses on creating an web application usable by craftspersons, business mans, and others professionals.  

## B. Non-functional Requierements

## C. Persona Definition

## D. Use Cases Analysis

# Glossary

-----

Un Assistant d'entreprise

- Permettre toutes les fonctionalités de comptabilitée et de gestion
  - Comptabilitée
    - Voir les comptes
    - Écrire de nouvelle ligne dans la base de données
    - Entrée manuellement des factures
    - Entrée manuellement des règlements
  - Gestion
    - Création de documents
    - Facture
      - Convertir des demandes d'entreprise en facture
      - Création manuelle
    - Devis
      - Convertir des demandes d'entreprise en devis
      - Création manuelle
    - Avoir
      - Convertir un facture en avoir
      - Création manuelle
    - Bon de commandes
      - Convertir à partir de demande de d'entreprise
      - Création manuelle


  - Gestion d'un effectif
    - Avoir la listes des employers
    - Informations sur les employers :
      - Ancienneté
      - Sallaire / Coût pour l'entreprise
      - Rôles
      - Accès sur le logiciel
      - Listes des projets avec les rôles attribuer dessus
- Permettre d'organiser tous les projets sur la web app
  - Définir :   
    - Le chef de projet
    - Le budget
    - Les équipes qui travaillerons dessus
    - Ceux qui s'occupe de l'approvisionnement
  - Pour les responsables :
    - Prendre contact avec l'équipe
    - Voir l'évolution du projet avec l'accès aux rapports
    - Voir l'utilisation du budget par categorie:
      - Transport
      - Payement de prestataire externe
  - Pour le chef de projet
    - Pouvoir assignier 
      - Des tâches
      - Des deadlines
      - Les personnes / équipes qui s'en occupe
      - Définir les priorités
- Réseaux Social B2B / B2C
  - Contacter des Entreprises en tant que Chef de Projet / Responsable...
  - Information sur les entreprises:
    - Informations générales:
      - Dans une section information sur l'entreprise :
        - Fonctionalité de SOCIETE.COM et Pappers
          - Siren
          - Siret
          - Forme juridique
          - Numéro de TVA
          - Code NAF ou APE
          - KBIS
          - Adresse de Siège social
          - Nom du dirigeant
          - Nombre d'employer
      - Sur la première page :
        - Domaine d'activité
        - Avis sur l'entreprise avec des commantaires
- Possibilités avec cette app
  - Se connecter sur des sites de livraison / d'entreprise et toutes commandes se traduit sur le réseau 