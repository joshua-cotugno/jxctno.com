# Colors Reference

| Default |  Light  | Use Name         | Color Named      |
| :-----: | :-----: | :--------------- | :--------------- |
| #1b1b27 | #f6f6f6 | Background       | primary_bg       |
| #387e6e | #2b2b2b | Accent           | primary_acc      |
| #f6f6f6 | #1b1b27 | Primary Text     | primary_text     |
| #0e1f9b | #5a6cf0 | Secondary Accent | secondary_accent |
| #2b2b2b | #f6f6f6 | Secondary Text   | secondary_text   |

```css colors.css

/* Variables */
:root {
  --primary_bg: #1b1b27;
  --primary_accent: #387e6e;
  --primary_text: #f6f6f6;
  --secondary_accent: #0e1f9b;
  --secondary_text: #2b2b2b;
}

/* Light Mode */

.isLight .primary .bg {
  background: var(--primary_bg);
  color: var(--primary_text);
}

.isLight .primary .accent {
  background: var(--primary_accent);
  color: var(--primary_text);
}

.isLight .secondary .bg {
  background: var(--secondary_accent);
  color: var(--secondary_text);
}

.isLight .secondary .accent {
  background: var(--primary_bg);
  color: var(--primary_text);
}

/* Dark Mode */
.isDark .primary .bg {
  background: var(--primary_text);
  color: var(--primary_bg);
}

.isDark .primary .accent {
  background: var(--primary_accent);
  color: var(--primary_text);
}

.isDark .secondary .bg {
  background: var(--secondary_accent);
  color: var(--secondary_text);
}

.isDark .secondary .accent {
  background: var(--primary_bg);
  color: var(--primary_text);
}

```

