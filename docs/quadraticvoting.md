---
slug: quadraticvoting
title: Quadratic Voting
sidebar_label: Quadratic Voting
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<link rel="stylesheet" href={useBaseUrl("katex/katex.min.css")} />

<img alt="Animated example of the debating stage." src={useBaseUrl('img/voting.gif')} />

After the [debating stage](rationaldebating.md) has ended, the voting phase begins. 
Each joined participant has the same number of **initial vote tokens $T_{\text{vote},0}$** which
she/he can use to support or oppose arguments.

Depending on the **voters preference strength $P$**, 
he can put different **weight $W$** to her/his vote by spending more vote tokens
$$
W(P)= C(P),
$$
with $C$ being the quadratic cost function
The cost of the vote $C$ scales quadratically with the preference strength
$$
C(P) = P^2 \cdot T_\text{vote}
$$

For example, to double her/his vote weight from $W=1$ to $W=2$, the voter must spend $C(2)=4\,T_\text{vote}$ tokens.
