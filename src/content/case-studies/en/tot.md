---
---

Tot is the 100% Italian fintech that simplifies financial and administrative management for businesses. A business account with an Italian IBAN, business cards, e-invoicing, and team expense management, all in one place. Over 7,500 companies use it every day.

**Their target?** Entrepreneurs, SMEs, and professionals who want to run their company without wasting time between the bank, the accountant, and bureaucracy.

## TL;DR - Key Results

- **Native mobile app live on iOS and Android in 6 months**, starting from scratch
- **Over 50% of Tot customers** run their business from the app
- **Custom-built web-mobile communication layer**: the existing web becomes the heart of a native app distributable on the stores
- **Maximum reuse of the web platform**, without rewriting everything from scratch
- **Continuous development**: new features released every month, well beyond the first pre-AI release

## When the challenge is technological, not about business

January 2025. Tot hands me a task that's as clear in its goal as it is complex in its execution: **build the mobile application**.

Here the story starts differently than usual. Tot isn't a startup with three founders and a no-code prototype. It's a structured company, with a solid product and tech team, thousands of active customers, and a mature web platform that already worked well.

And I knew the terrain well. Not only because I'm a Tot customer, but because the people working inside it were my colleagues in past experiences. When you enter a project with that level of mutual trust already built, you start with a huge advantage.

*But the interesting thing was understanding the nature of the challenge right away.*

It wasn't a business challenge. The product was validated, the market was there, the direction was clear. It was a **purely technological challenge**.

The goal: reuse the existing web platform as much as possible, integrating it into a native application that could be distributed on the App Store and Google Play, and that would become the perfect companion for running your business from your phone.

Sounds simple put like that. It's not at all.

![Christian holding the Tot app with the Tot web platform in the background](/images/case-studies/tot-app.jpg)

## The smart compromise: native without rewriting everything

The temptation, in cases like these, is only one: rewrite everything from scratch in native.

You build a completely separate mobile app, replicate every feature, and get a perfect native experience. Beautiful on paper. Devastating in practice.

It would mean duplicating years of web development, maintaining two codebases in parallel forever, and slowing down the release of every new feature. For a company that adds value every month, it would have been technical suicide.

So we chose the smarter path, even if more complex to design well: **build a React Native app that uses the WebView as a landing point, but that taps into all the native features directly from the device.**

The principle is this:

- **The WebView is the landing point**, not an empty shell. Tot's mature web platform is reused where it makes sense to reuse it, avoiding rewriting logic that already works.
- **Native features come from the device.** Everything a browser can't do, and that you really need in an app to run a business, passes through the native layers and custom plugins that bridge with the WebView.
- **A custom communication layer** holds the two worlds together, managing the dialogue between web and native reliably.

The result is an app that lives on the stores like any other native app, but that doesn't force Tot to maintain two separate products. The web stays the heart, the native adds everything the web alone can't give.

## The constant challenge: making two different worlds talk

If you ask me what the biggest difficulty was, I won't tell you about a single dramatic moment. I'll tell you about a **constant**.

The real complexity of this project isn't an isolated bug or a night spent tinkering. It's finding, every time, **the right connection between web and mobile.**

When you build a communication layer between two worlds that reason differently, the recurring question is always the same: whose responsibility is what? Where does the web end and where does the native begin? How do the native layers of the various custom libraries interact with the web without stepping on each other's toes?

Every new feature reopens this question. A push notification, access to a device function, an integration that requires going below the browser level: each one requires deciding precisely who handles what, and making native code and web code talk without anything breaking in the middle.

*This is the kind of challenge that isn't solved once and for all.* It's faced at every iteration, with discipline and a deep knowledge of both sides of the border. It's what makes a project like this technically fascinating and, at the same time, never trivial.

And every time we find the right connection, the architecture becomes a little more solid and the next piece a little easier to fit in.

<div id="testimonial-placeholder"></div>

## The right team for a border problem

On the mobile team we started as two: me and one other person.

It was the right size for a problem of this kind. When you work on a delicate communication layer, where every architectural decision has cascading consequences, a small, tight-knit team is worth more than many developers stepping on each other's toes on the same border.

Today on mobile it's me, and I keep growing the app together with Tot's product and tech team. I'm not an external vendor who delivers and disappears: I'm a figure who works closely with those who live the product every day, constantly aligning business needs with technical choices.

And here the value of already knowing the people comes back. When you have mutual trust built over time, the hard conversations, the ones about what to postpone, what to prioritize, where it's worth investing complexity, become simple. You don't waste time building trust. You build product.

## The results speak

**In 6 months we went live**, with the first version of the app on the stores. And that was the pre-AI version: the starting point, not the finish line.

From there we never stopped. **Every month we release new features**, expanding what the entrepreneur can do directly from their phone.

But the figure that matters most is this: **over half of Tot customers use the mobile app** to run their business.

It's not a secondary companion, an extra that few open. It has become a central tool for how thousands of entrepreneurs use Tot every day. And this, for an app built by intelligently reusing an existing web platform, is proof that the strategy worked.

## The decisive factors

- **Don't rewrite what already works.** Reusing the mature web platform inside a native app allowed Tot to move to mobile without duplicating years of development and without slowing down the release of new features. The right architectural choice saves months.
- **The value is in the layer in between.** Building a companion mobile app isn't copying the web in miniature. It's carefully designing the border between web and native, deciding who handles what. That's where a project like this is won or lost.
- **Pre-existing trust accelerates everything.** Already knowing the people you work with eliminates the noise. Hard decisions become quick conversations, and time is invested in the product instead of building relationships from scratch.

**Tot today has what many companies chase**: a solid native app on the stores, used by the majority of customers, built by intelligently reusing what already existed, and growing steadily month after month.

## For founders who are reading

**Before rewriting everything in native, ask yourself what you can reuse.** A mature web platform is an asset, not an obstacle. The right question isn't "how do I rebuild the app from scratch?" but "how do I bring the value I've already built to where my users want it?".

**Pure technological challenges require depth, not shortcuts.** When the problem is making two different worlds talk (web and native, in this case) there's no quick solution. There's deep knowledge of both sides and the discipline to face the same kind of decision at every iteration.

**A small, tight-knit team beats a big, confused one.** On a border problem, where every choice has cascading consequences, two people who understand each other are worth more than ten who overlap. The right team size depends on the nature of the problem, not the ambition of the project.

**Mobile doesn't mean "separate app".** It means bringing your business into your customers' pockets in the most sustainable way for those who build it. Sometimes the best answer is a well-made bridge between what you have and what you need.

The question isn't "do we need a native app from scratch?" but "what's the smartest way to be native without rebuilding everything?"
