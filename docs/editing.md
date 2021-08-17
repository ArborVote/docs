---
slug: editing
title: Editing Phase
sidebar_label: Editing Phase
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<link rel="stylesheet" href={useBaseUrl("katex/katex.min.css")} />

## Node Creation
After the debate is started by the issuer of the root node,
anyone can add nodes to the tree.
Beside the root node, two more node types exist:
1. argument nodes
2. fact nodes

In contrast to root and argument nodes, no sub-nodes can be posted below fact nodes 
so that they always constitute the leaves of the tree.

### Editing-Period and Finality
Within a specified editing-period that starts after the node creation, 
authors of nodes can still edit the argument text or move the argument. 
Moreover, the author can add child nodes below.

After the editing period is over, the node is finalized and cannot be edited or moved any more.
This finality allows other debaters to react to argument nodes and add child nodes below.
