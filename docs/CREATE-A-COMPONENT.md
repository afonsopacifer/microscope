# Create a component

**Note:** For example, lets create an atom.

**1 - After Install the microscope, run the `grunt serve` command for watch for changes and build when necessary.**

[how to install?](INSTALLATION.md)

**2 - Choose a name for the component:**

**Example:** small-btn

**3 - Create the markup of component in `source/markup/atoms`:**

**File:** small-btn.html

```html
<a href="#" class="any-class-name">
 Click here
</a>
```

**4 - Create the style of component in `source/style/atoms`:**

**File:** small-btn.styl

```css
.any-class-name {
	padding: 10px 20px;
	transition: opacity .3s;
	color: #fff;
	text-decoration: none;
	display: inline-block;
}

.any-class-name:hover {
	opacity: 0.7;
}
```

**4 - Add your component in the `config.json` file:**

```
"atoms": [
	{
		"name": "small-btn",
		"states": "complete",
		"notes":"Little and funny"
	}
]
```

**Note:** You have 3 levels to choose from `states`:

| Value        | Result           |
| ------------- |:-------------:|
| progress      | ![progress](img/progress.png) |
| review      | ![review](img/review.png) |
| complete      | ![complete](img/complete.png) |

**6 - Save all files and view your new component on http://localhost:9000/**
