---
slug: roadmap
title: Roadmap
sidebar_label: Roadmap
---

Everything elsewhere in these docs describes the system **as built**. This page is the one exception: planned work that is decided in intent but not yet designed or implemented.

## Time-weighted tally

Redemption pays the final reserve ratio — the price a last-second staker set. A **time-weighted tally** (the approval averaged over the rating window) is the designated hardening: it makes a last-block snipe unable to flip the outcome for the cost of a fee, while redemption keeps paying final reserves and stays solvent.

## Identity registry adapters

The join gate is a minimal pluggable identity registry. Beyond the reference EAS adapter, adapters for **World ID**, the zk-passport family (Self, zkPassport, Rarimo), and **Coinbase Verifications** are candidates — as is an optional per-debate **join allowlist** for org-internal debates.

## Live updates

The frontend polls; Hasura GraphQL **subscriptions** over WebSocket would push every join, stake, and tally into the UI the moment the indexer folds it.

## Protocol fee

The bounty layer takes no protocol fee in v1; folding one into the market-fee mechanism is a recorded consideration.

## Possible rename

Since arguments are *rated* through markets rather than voted on, renaming the project (e.g. to **ArborRate**) is under consideration.
