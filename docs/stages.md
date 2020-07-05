---
id: stages
title: Stages
sidebar_label: Stages
---

The decision-making process in ArborVote takes place in three stages:

1. Debating
2. Voting
3. Counting

## Debating Stage
After the root thesis was posted and a bounty was placed by an issuer,
the creation phase begins.
Participants joining the debate can add arguments to the current layer of the tree. 
Deeper layers are added over times and prior layers are finalized.

[read more](rationaldebating.md)

## Voting Stage
After the debating stage ended, the voting phase starts.
Participants can allocate vote tokens to arguments to vote for or against them.
Everbody has the same share of vote tokens and vote cost scales quadratic.

[read more](quadraticvoting.md)

## Counting Stage
After the voting stage ended, the counting phase starts.
The votes on the individual arguments are accumulated from the leaves of the tree to its root.
Child arguments pass their accumulated votes to their parent argument.
Arguments that accumulate more down- than up-votes are ignored and don't pass their votes to their parents.

[read more](votecounting.md)
