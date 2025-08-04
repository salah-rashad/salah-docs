---
title: Gizmos Tutorial
---

```csharp
using UnityEngine;

public class Example : MonoBehaviour
{
    private void OnDrawGizmos()
    {
        // Draw a sphere
        Gizmos.color = Color.red;
        Gizmos.DrawSphere(transform.position, 0.5f);

        // Draw a cube
        Gizmos.color = Color.green;
        Gizmos.DrawCube(transform.position, Vector3.one);

        // Draw a wire sphere
        Gizmos.color = Color.blue;
        Gizmos.DrawWireSphere(transform.position, 0.25f);

        // Draw a wire cube
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireCube(transform.position, Vector3.one * 0.5f);

        // Draw a line
        Gizmos.color = Color.magenta;
        Gizmos.DrawLine(transform.position, transform.position + Vector3.up);

        // Draw a ray
        Gizmos.color = Color.cyan;
        Gizmos.DrawRay(transform.position, Vector3.up);
    }
}
```
