import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef; 
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef; 
  @Output() addIngredientEvent = new EventEmitter<Ingredient>(); 
  
  
  constructor() { }

  ngOnInit() {
  }

  onAddItem() { 
    const newIngredient: Ingredient = {
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    }

    this.addIngredientEvent.emit(newIngredient); 
  }
}
