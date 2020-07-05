---
id: rationaldebating
title: Rational Debating
sidebar_label: Rational Debating
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<link rel="stylesheet" href={useBaseUrl("katex/katex.min.css")} />


## Argument Creation
:::note
This a draft and the design features presented here are work in progess.
:::
After the debate is started by the issuer of the root thesis,
anyone can add arguments to the current layer of the tree.
The length of an argument will be limited to 500 characters.

### Argument Layers and Finality
Argument creation occurs in phases.
A new layer of child arguments can only be added to the tree, after a specified time interval.
The parent layer is then finalized and no new arguments can be added.

## Economic incentivization
:::note
This a draft and the design features presented here are work in progess.
:::

The collective attention of the participants is a limited resource. 

### Debate Bounty
To start a new debate, the author of the root argument has to place a bounty in ETH or DAI
that can be earned by participants adding important arguments to the debate.

### Argument Fees
To add am argument, the author has to pay a small fee as well which acts as stake
to prevent spamming and duplication of arguments. 
A small part of the fees is also used as gas in the final [vote counting stage](votecounting.md). 


### Rewards
The bounty and the surplus of the argument fees after vote counting is distributed among the authors of important argument. 
The relative share is determined by the difference of the

## Editing
:::note
This a draft and the design features presented here are work in progess.
:::
At the moment, editing is not allowed so that authors should consider and draft their arguments.

### Duplicate Detection
Participants can flag arguments that they consider as duplicates. 
This triggers a vote, where a majority must confirm that the newer argument is a duplicate.
For this, they also have to pay a fee, which they get back together with a reward,
which is taken form the stake of the duplicate argument.

<!--img alt="Animated example of a the creation, voting, and counting process." src={useBaseUrl('img/VotingExample.gif')} /-->