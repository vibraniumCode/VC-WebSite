---
title: "Cómo migramos un sistema de Visual Basic 6 a Vue 3"
date: "2026-04-13"
category: "Caso de estudio"
description: "La historia detrás de Nexus — cómo transformamos un sistema desktop legacy en una plataforma web moderna."
---

## El cliente

Una empresa de estaciones de servicio en Buenos Aires necesitaba modernizar su sistema de generación de comprobantes. El sistema original estaba desarrollado en Visual Basic 6 y solo permitía generar un comprobante a la vez desde una PC específica.

## El problema

El sistema legacy tenía varios problemas críticos:

- Solo funcionaba en una PC con Windows XP
- Generaba un comprobante a la vez
- No tenía respaldo de datos
- Era imposible acceder desde otros dispositivos
- El mantenimiento era cada vez más costoso

## La solución

Desarrollamos Nexus v2 — una plataforma web moderna construida con Vue 3, Node.js, TypeScript y SQL Server.

### Lo que construimos

- Sistema web accesible desde cualquier dispositivo
- Generación masiva de comprobantes simultáneos
- Panel de administración completo
- Base de datos centralizada con respaldo automático
- Autenticación y roles de usuario

## El resultado

El cliente pasó de generar 1 comprobante a la vez a generar cientos simultáneamente desde cualquier browser. El tiempo de procesamiento bajó un 90% y eliminaron la dependencia de hardware específico.

## Tecnologías usadas

- **Frontend** — Vue 3, TypeScript, Tailwind CSS
- **Backend** — Node.js, Express
- **Base de datos** — SQL Server
- **Deploy** — Servidor local del cliente

## Conclusión

Las migraciones de sistemas legacy son desafiantes pero extremadamente valiosas. Nexus es un ejemplo de cómo la tecnología moderna puede transformar completamente la operación de un negocio.