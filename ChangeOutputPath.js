export class ChangeOutputPath {
  apply(hooks) {
    hooks.emitFile.tap("changeOutputPath", (context) => {
      console.log("--------------changeoutputpath");
      context.changeOutputPath("./dist/cxr.js")
    });
  }
}
