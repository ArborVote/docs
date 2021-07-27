---
slug: votecounting
title: Vote Counting
sidebar_label: Vote Counting
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<link rel="stylesheet" href={useBaseUrl("katex/katex.min.css")} />

<img alt="Animated example of the debating stage." src={useBaseUrl('img/counting.gif')} />

After the [voting stage](quadraticvoting.md) has ended, the vote counting starts.
For each argument, the **down-votes $V_\text{down}$** are subtracted from the **up-votes $V_\text{up}$** , which we call the **approval of the argument $A_\text{arg}$**.
Additionally, the approval of all child arguments is taken into account and added to that of the parent.
Thus, before being able to calculate the approval of an argument, the approval of all child sub-trees must be calculated first,
which is why counting has to start at the leaves of the tree (arguments without children). 

Depending on if a child argument under consideration is a Pro- or a Con-arguments,
it supports or opposes its parent by adding or subtracting from its approval, respectively.

$$
A_{\text{arg},i} = V_{\text{up},i} - V_{\text{down},i} + \sum_{j=1}^{N_\text{childs}} A_{\text{from child},j}
$$


This way, the cumulative approval of all arguments accumulates until it reaches the root, where it forms the decision.

## Special Rule: Disapproved Arguments
Arguments having more down-votes than up-votes are considered as wrong or misleading by the voter majority
and should not (inversely) influence the decision outcome.
Therefore, their approval is not counted for the parent argument, so that they are neither supporting nor opposing so that
$$
A_{\text{from child},i} = \text{max}\left\{A_{\text{arg},i},\,0\right\}.
$$



