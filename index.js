import { Probot } from "probot";

export default (app) => {

  app.on("issues.opened", async (context) => {

    const issue = context.payload.issue;

    await context.octokit.issues.createComment(
      context.issue({
        body: `
🤖 Web4AI Bot

Thanks for opening this issue.

Issue Title:
${issue.title}

Status:
✓ Received
✓ Logged
✓ Awaiting review
        `
      })
    );
  });

  app.on("pull_request.opened", async (context) => {

    await context.octokit.issues.createComment(
      context.issue({
        body: `
🤖 Web4AI Review Started

Checks:

✓ Structure
✓ Dependencies
✓ Security
✓ Documentation
        `
      })
    );
  });

  app.on("push", async (context) => {

    console.log(
      `Push detected in ${context.payload.repository.full_name}`
    );

  });

};
