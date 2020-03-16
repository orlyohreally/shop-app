import { Directive, HostListener } from "@angular/core";
import { NewProductFormComponent } from "../components/new-product-form/new-product-form.component";
import { MatDialog } from "@angular/material/dialog";

@Directive({
  selector: "[productsNewProductTrigger]"
})
export class NewProductTriggerDirective {
  @HostListener("click", ["$event"]) onClick() {
    this.newProduct();
  }

  constructor(private dialog: MatDialog) {}

  newProduct() {
    this.dialog.open(NewProductFormComponent, {
      width: "60%",
      maxHeight: "80%",
      maxWidth: "700px",
      minWidth: "300px",
      restoreFocus: false,
      panelClass: "dialog_scrollable"
    });
  }
}
