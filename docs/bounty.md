---
slug: bounty
title: Bounty
sidebar_label: Bounty
---

A debate can carry a **bounty**: an ERC-20 prize the creator attaches at creation, paid to the debate's **net winners**. The token is the creator's choice and deliberately uncurated — any ERC-20 works. Anyone may **top up** the pool while the debate runs; top-ups are donations, not refundable positions.

## Eligibility and claims

A participant qualifies iff their final [vote token](tokens) balance **strictly exceeds the initial grant** — they net won points by arguing or rating. A qualifying participant's claim is proportional to their **excess** over the debate's total initial supply:

$$
\text{claim} = \text{pool} \times \frac{\text{tokens} - 100}{100 \cdot N} \qquad N = \text{joined participants}
$$

Claims open the moment the debate is [finished](tallying) and are **one-shot**: the claim transaction settles the claimer's own positions first — redeeming their shares and collecting their authored arguments' fees — so the excess is complete before it pays out.

## Claim window and sweep

Claims close **7 days** after the tally. Afterwards the creator **sweeps** the unclaimed remainder.

The remainder is the point, not a bug: against the fixed denominator, the claimed fraction measures how contested the debate actually was. A bounty on a question the crowd already agrees on costs almost nothing; it becomes expensive precisely when real disagreement is resolved. A collusion ring of $k$ verified identities can never capture more than $(k-1)/N$ of the pool.
