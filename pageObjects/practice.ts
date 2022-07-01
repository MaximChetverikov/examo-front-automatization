export class PracticePage {
  static async getSubmitButtonText(page: any) {
    return page.locator('.css-vinns1 h6').allTextContents();
  }

  static async getSubmitButton(page: any) {
    return page.locator('.css-vinns1 h6');
  }
}
