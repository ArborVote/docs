---
slug: phases
title: Phases 
sidebar_label: Phases
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The decision-making process in ArborVote is divided into three phases:

1. Editing
2. Rating
3. Tallying

## Editing Phase
After the root node was posted and a bounty was placed by an issuer,
the editing phase begins.
Participants joining the debate add arguments to the tree.

[read more](editing.md)

## Rating Phase
After the debating stage ended, the voting phase starts.
Participants can allocate vote tokens to arguments to vote for or against them.
Everybody has the same share of vote tokens

[read more](rating.md)

## Tallying Phase
After the rating phase ended, the tallying phase starts.
The votes on the individual arguments are accumulated from the leaves of the tree to its root.
Child arguments pass their accumulated votes to their parent argument.
Arguments that accumulate more down- than up-votes are ignored and don't pass their votes to their parents.

[read more](tallying.md)
