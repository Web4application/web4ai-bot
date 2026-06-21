export async function handleReview(context) {
  await context.octokit.issues.createComment(
    context.issue({
      body: "🤖 Web4AI review started..."
    })
  );
}
