---
title: String Utils
---

### Format Number Short

```dart
String formatNumberShort(int n) {
    if (n < 1000) return n.toString();
    if (n < 1000000) return '${(n / 1000).toStringAsFixed(1)}K';
    if (n < 1000000000) return '${(n / 1000000).toStringAsFixed(1)}M';
    return '${(n / 1000000000).toStringAsFixed(1)}B';
}
```

### Format Timestamp to Date

```dart
String formatTimestamp(int timestamp) {
    var date = DateTime.fromMillisecondsSinceEpoch(timestamp);
    return DateFormat('yyyy-MM-dd').format(date);
}
```
