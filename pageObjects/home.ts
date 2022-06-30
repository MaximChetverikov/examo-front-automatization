export class HomePage {
  static async getExamoText(page: any) {
    return page.locator('.css-j7qwjs h1').allTextContents();
  }
}
