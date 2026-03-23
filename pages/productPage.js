export class ProductPage{
constructor(page){
        this.page = page;
        this.inventoryCount = page.locator('.inventory_item');
        this.dropdown = page.locator('.product_sort_container');
        this.options = this.dropdown.locator('option');
    }
 getProduct(){
     return this.inventoryCount;
 }
 async getProductsCount(){
    return await this.inventoryCount.count();
 }
}