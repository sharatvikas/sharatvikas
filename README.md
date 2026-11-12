<div align="center">

# Hi, I'm Sarat 👋

<a href="https://github.com/sharatvikas"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=2B6CB0&center=true&vCenter=true&width=640&lines=Staff+Site+Reliability+Engineer;AWS+Solutions+Architect+%C2%B7+CKA+Certified;Building+AI+tools+for+SRE+%26+platform+teams;Making+reliability+fun+to+learn+%E2%86%92+Ninefold" alt="Staff Site Reliability Engineer · AWS Solutions Architect · CKA Certified · Building AI tools for SRE & platform teams"></a>

**Staff Site Reliability Engineer** | AWS Solutions Architect | CKA Certified | Boulder, CO

I build the platforms and tools that help engineering teams ship faster and sleep better at night.<br>Currently governing all Cloud Engineering at [Sovrn](https://www.sovrn.com).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://linkedin.com/in/saratvikas)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github)](https://github.com/sharatvikas)
[![Play Ninefold](https://img.shields.io/badge/▶_Play-Ninefold-1e8a4a)](https://sharatvikas.github.io/ninefold/)
[![Hum Raaga](https://img.shields.io/badge/🎵-humraaga.com-b5523b)](https://humraaga.com)

</div>

---

## 🧭 What I do, in plain words

**Site Reliability Engineering (SRE)** is the job of keeping software running for the people who depend on it: measuring how reliable it is, automating the repetitive operational work, and turning every outage into a lesson so it doesn't happen twice.

Most of what I build sits in three areas:

| Area | What it means | Where you'll see it below |
|---|---|---|
| **AI for operations** | Giving AI assistants safe, structured access to real operational tools so they can help during incidents | sre-mcp-server · k8s-ai-ops · mcp-sdk-private-org · terraform-ai-guardian |
| **Platform engineering** | Self-service internal platforms so product teams can ship without filing tickets | platform-engineering-blueprint · observability-as-code |
| **Reliability & cost** | Proving systems survive failure, and running them without waste | chaos-engineering-operator · aws-finops-intelligence |

---

## 🎮 Featured: Ninefold

<table>
<tr>
<td width="55%">
<a href="https://sharatvikas.github.io/ninefold/"><img src="https://raw.githubusercontent.com/sharatvikas/ninefold/main/docs/screenshots/gameplay.gif" alt="Ninefold gameplay: find the cause of a failed build, fix it, watch it pass"></a>
</td>
<td>

**[Ninefold](https://github.com/sharatvikas/ninefold)** is a cozy pixel-art game that teaches SRE, DevOps & cloud engineering by having you fix a town.

Build trains derail on a missing dependency. Ships sink because they run out of memory (a Kubernetes crash loop). Letters reach the wrong house because a DNS record is wrong. You **find the evidence, change the real setting, verify it**, then see the same fix with real tools.

- 51 tickets across 8 areas: DNS, CI/CD, Terraform, Kubernetes, observability, security, databases, SLOs
- Metaphor first, then a real terminal (`kubectl`, `dig`, PromQL)
- Free, runs in the browser, nothing to install

**[▶ Play it now](https://sharatvikas.github.io/ninefold/)**

</td>
</tr>
</table>

---

## 🛠️ What I'm Building

Click any project to expand **the problem it solves**, **what it does**, and **its key terms, defined**.

<details>
<summary><b>sre-mcp-server</b>: MCP server giving AI assistants direct access to your SRE toolchain · <i>Python, MCP SDK</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/sre-mcp-server?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/sre-mcp-server)**

> **Problem:** at the start of every incident, on-call engineers spend precious minutes on the same mechanical work: correlating alerts, pulling metrics, checking recent deployments, skimming runbooks.
>
> **What it does:** a production-grade MCP server that gives AI assistants (Claude, Cursor and others) secure access to PagerDuty, Grafana, Kubernetes, AWS CloudWatch and runbooks, so the assistant can do that groundwork with you.

| Term | Meaning |
|---|---|
| **MCP (Model Context Protocol)** | An open standard for connecting AI assistants to tools and data, a bit like a USB port for AI. |
| **On-call / incident** | The engineer responsible when something breaks / an unplanned disruption users notice. |
| **Runbook** | A step-by-step guide for handling a known operational problem. |
</details>

<details>
<summary><b>k8s-ai-ops</b>: AI-powered Kubernetes diagnostics and auto-remediation · <i>Go, Claude API, K8s</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/k8s-ai-ops?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/k8s-ai-ops)**

> **Problem:** Kubernetes events and pod statuses are cryptic, and turning them into a diagnosis takes experience.
>
> **What it does:** a CLI and in-cluster operator that uses the Claude API with live cluster context to diagnose degraded pods, explain events in plain English, suggest fixes and, optionally, auto-remediate.

| Term | Meaning |
|---|---|
| **Kubernetes (K8s)** | The system that runs and manages containers across many machines. |
| **Pod** | Kubernetes' smallest unit: one or more containers running together. |
| **OOMKilled** | A container stopped because it used more memory than its limit. |
| **Remediation** | Applying the fix, here optionally automated. |
</details>

<details>
<summary><b>mcp-sdk-private-org</b>: Enterprise MCP server scaffold with auth, RBAC, and audit logging · <i>Python, MCP SDK</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/mcp-sdk-private-org?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/mcp-sdk-private-org)**

> **Problem:** the official MCP SDK makes tools quick to build, but a *private* MCP server shared by many teams inside a company needs authentication, tenancy and compliance on top.
>
> **What it does:** a scaffold, a drop-in middleware library (auth, audit, rate limiting), deployment patterns (Kubernetes, Lambda, EC2) and a working "DevOps Toolbox" reference server.

| Term | Meaning |
|---|---|
| **RBAC** | Role-based access control: what each person can do is decided by their role. |
| **Audit logging** | A tamper-evident record of who did what, and when. |
| **Multi-tenant** | One service safely shared by several teams, each isolated from the others. |
</details>

<details>
<summary><b>terraform-ai-guardian</b>: AI Terraform plan reviewer for GitHub Actions · <i>Python, Claude API, GH Actions</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/terraform-ai-guardian?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/terraform-ai-guardian)**

> **Problem:** Terraform plans are long and hard to review, so reviewers skim and approve. That's how security groups get opened to the world and expensive resources slip through.
>
> **What it does:** runs in your CI pipeline and reviews every `terraform plan` with Claude, flagging security risks, cost implications, blast radius and drift from org standards.

| Term | Meaning |
|---|---|
| **Terraform / IaC** | Infrastructure as code: describing cloud resources in versioned files instead of clicking in a console. |
| **Plan** | Terraform's preview of exactly what it's about to create, change or destroy. |
| **Blast radius** | How much breaks if a change goes wrong. |
| **Drift** | When real infrastructure no longer matches the code. |
</details>

<details>
<summary><b>aws-finops-intelligence</b>: AI-driven AWS cost anomaly detection and rightsizing · <i>Python, AWS SDK</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/aws-finops-intelligence?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/aws-finops-intelligence)**

> **Problem:** AWS bills are complex (Reserved Instances, Savings Plans, data transfer, hundreds of dimensions), so even experienced engineers miss savings.
>
> **What it does:** ingests Cost Explorer, Trusted Advisor and utilisation data nightly to detect anomalies, find waste and recommend rightsizing, like a FinOps analyst that sends you a Slack digest.

| Term | Meaning |
|---|---|
| **FinOps** | Managing cloud spend as an engineering discipline: visibility, accountability, optimisation. |
| **Rightsizing** | Matching resource sizes to what's actually used. |
| **Anomaly detection** | Automatically spotting spend that's unusual compared with its normal baseline. |
</details>

<details>
<summary><b>chaos-engineering-operator</b>: Kubernetes chaos operator with SLO-aware safety gates · <i>Go, controller-runtime</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/chaos-engineering-operator?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/chaos-engineering-operator)**

> **Problem:** you only find out how a system handles failure when failure happens, unless you test it on purpose, safely.
>
> **What it does:** runs controlled experiments (pod failures, network partitions, CPU/memory pressure, DNS failures) declared as Kubernetes resources, with automatic abort if SLOs start burning, a full audit timeline, and a gradual blast radius.

| Term | Meaning |
|---|---|
| **Chaos engineering** | Deliberately injecting failures to prove a system is resilient, before real failures do it for you. |
| **Operator** | A Kubernetes controller that automates running a piece of software. |
| **SLO / burn rate** | A reliability target / how fast you're using up your allowed failures. |
</details>

<details>
<summary><b>platform-engineering-blueprint</b>: Full IDP: Backstage + ArgoCD + Crossplane + Terraform · <i>HCL, YAML, Helm</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/platform-engineering-blueprint?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/platform-engineering-blueprint)**

> **Problem:** product engineers lose time filing tickets for infrastructure (a bucket, a namespace, a database) and waiting.
>
> **What it does:** an opinionated, forkable Internal Developer Platform that lets engineers provision infrastructure and deploy services themselves, through golden paths.

| Term | Meaning |
|---|---|
| **IDP (Internal Developer Platform)** | A self-service layer over infrastructure, built for a company's own engineers. |
| **Backstage** | A developer portal: a catalogue of services plus templates to create new ones. |
| **ArgoCD / GitOps** | Git is the source of truth; ArgoCD keeps the cluster in sync with it. |
| **Crossplane** | Manage cloud resources (databases, buckets) as Kubernetes objects. |
</details>

<details>
<summary><b>observability-as-code</b>: Grafana dashboards + Prometheus rules + AI alert enrichment · <i>Grafonnet, YAML, Go</i> &nbsp; <img src="https://img.shields.io/github/last-commit/sharatvikas/observability-as-code?label=updated&style=flat-square" alt="last commit"></summary>

📂 **[Open the repo →](https://github.com/sharatvikas/observability-as-code)**

> **Problem:** dashboards built by hand with no version control, alert rules that are never reviewed, and alerts that fire with no context.
>
> **What it does:** dashboards, alerting and recording rules and Alertmanager config, all version-controlled, tested and deployed via CI/CD, with an SLO framework and AI-powered alert enrichment.

| Term | Meaning |
|---|---|
| **Observability** | Understanding a system from its outputs: metrics, logs and traces. |
| **Prometheus / Grafana** | Collects and queries metrics / turns them into dashboards. |
| **Alert enrichment** | Adding context (what it means, what to check, the runbook) to an alert before it reaches a human. |
</details>

### 🎵 Side quests

**[Hum Raaga](https://humraaga.com)**: hum, sing, or upload any track and discover its raga. Indian classical music AI covering both Hindustani and Carnatic traditions: pitch tracking + swara analysis fused with ML models trained on 88k samples, plus Shazam-style fingerprinting for film songs. Live at [humraaga.com](https://humraaga.com).

<details>
<summary><i>What's a raga?</i></summary>

A **raga** is a melodic framework in Indian classical music: a set of notes (**swaras**), the order and ornaments they're sung with, and the mood they evoke. **Hindustani** (North) and **Carnatic** (South) are the two main traditions.
</details>

**[Explainer Studio](https://github.com/sharatvikas/explainer-studio)**: a Claude Code plugin that turns any folder of notes, questions or screenshots into researched, animated 1080p explainer videos and Shorts.

---

## 📡 Recently shipped

<!-- RECENT:START -->
| Project | What it is | Language | Last push |
|---|---|---|---|
| [**k8s-ai-ops**](https://github.com/sharatvikas/k8s-ai-ops) | AI-powered Kubernetes operations assistant — Claude API + live cluster context for pod diagnosis, event explanation, and auto-remediation | Go | 2026-11-12 |
| [**platform-engineering-blueprint**](https://github.com/sharatvikas/platform-engineering-blueprint) | Production-ready Internal Developer Platform blueprint — Backstage + ArgoCD + Crossplane + Terraform for self-service infrastructure and deployments | HCL | 2026-11-12 |
| [**sre-mcp-server**](https://github.com/sharatvikas/sre-mcp-server) | Production-grade MCP server for SRE operations — PagerDuty, Grafana, Kubernetes, and AWS CloudWatch tools for AI assistants | Python | 2026-11-12 ⭐ 1 |
| [**aws-finops-intelligence**](https://github.com/sharatvikas/aws-finops-intelligence) | AI-driven AWS cost intelligence — anomaly detection, waste identification, rightsizing recommendations, and Terraform remediation snippets | Python | 2026-11-12 |
| [**chaos-engineering-operator**](https://github.com/sharatvikas/chaos-engineering-operator) | Kubernetes operator for controlled chaos experiments — pod failures, network partitions, CPU/memory stress with SLO-aware safety gates and auto-rollback | Go | 2026-11-12 |
| [**observability-as-code**](https://github.com/sharatvikas/observability-as-code) | Complete observability stack as code — Grafana dashboards, Prometheus rules, SLO framework, and AI-powered alert enrichment via Claude API | Jsonnet | 2026-11-12 |

<sub>🤖 Updated automatically by GitHub Actions from my 6 most recently pushed public repos.</sub>
<!-- RECENT:END -->

---

## 🧰 Core Expertise

```
Cloud          AWS (Solutions Architect) · EKS · ECS · VPC · Transit Gateway
               Route53 · CloudWatch · IAM · S3 · RDS

Orchestration  Kubernetes (CKA) · Helm · Istio · ArgoCD · Crossplane

IaC            Terraform · CloudFormation · Ansible · CDK

Observability  Prometheus · Grafana · Alertmanager · Datadog

CI/CD          GitHub Actions · Jenkins · GitOps

AI/LLM         Claude API · Model Context Protocol (MCP) · LangChain

Languages      Python · Go · Bash · HCL
```

## 📜 Certifications

- AWS Certified Solutions Architect – Associate
- Certified Kubernetes Administrator (CKA)

<details>
<summary><b>📖 Glossary: the reliability terms I use most</b></summary>

| Term | Meaning |
|---|---|
| **SLI / SLO / SLA** | What you measure (e.g. requests served in < 300 ms) / the target you aim for (99.9%) / the contractual promise. |
| **Error budget** | 100% minus the SLO: how much failure you can afford to spend on shipping change. |
| **The nines** | 99.9% uptime ≈ 43 minutes of downtime a month; 99.99% ≈ 4 minutes. |
| **Toil** | Manual, repetitive operational work that should be automated away. |
| **Postmortem** | A blameless write-up of an incident: what happened, why, and what changes. |
| **GitOps** | Running infrastructure from Git: every change is a reviewed commit. |
| **Platform engineering** | Building internal self-service tooling so product teams move faster. |
</details>

---

<div align="center">

## 📫 Get In Touch

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin&style=for-the-badge)](https://linkedin.com/in/saratvikas)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&style=for-the-badge)](https://github.com/sharatvikas)

*"The goal of SRE is to make tomorrow better than today — by building systems that are reliable enough that the humans operating them can focus on what matters."*

</div>
