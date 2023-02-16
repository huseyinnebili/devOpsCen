import { LightningElement, api } from "lwc";
import CASE from "@salesforce/schema/Case";
import Origin from "@salesforce/schema/Case.Origin";
import Reason from "@salesforce/schema/Case.Reason";
import PotentialLiability from "@salesforce/schema/Case.PotentialLiability__c";
import Type from "@salesforce/schema/Case.Type";
import Status from "@salesforce/schema/Case.Status";
import ProductId from "@salesforce/schema/Case.ProductId";

import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class RecordFormCase extends LightningElement {
  @api recordId;
  objectApiName = CASE;

  fields = [Origin, Reason, PotentialLiability, Type, Status, ProductId];

  showToast() {
    const event = new ShowToastEvent({
      title: "Success",
      message: "Case Record has been created/updated succesfully.",
      variant: "success"
    });

    this.dispatchEvent(event);
  }
}