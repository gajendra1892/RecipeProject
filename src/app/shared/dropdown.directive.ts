import { Directive, Input, HostBinding, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    
    //@Input() dropDownClass :string='closed';

    @HostBinding('class.open') isOpen=false;
    constructor(){

    }

    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
        //this.addClass=this.dropDownClass;
    }
    // @HostListener('mouseleave') mouseleave(){
    //     this.isOpen=false;
    //     //this.addClass=this.dropDownClass;
    // }
}