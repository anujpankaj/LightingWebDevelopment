import { LightningElement, wire, track } from 'lwc';
import {CurrentPageReference, NavigationMixin} from 'lightning/navigation';

export default class PageStateChangeExample extends NavigationMixin(LightningElement) {
    // Injects the page reference that describes the current page
    @wire(CurrentPageReference)
    currentPageReference; // NOTE: This value is read-only

    @track
    showPanelUrl;

    @track
    noPanelUrl;

    // Determines the display for the component's panel
    get showPanel() {
        // Derive this property's value from the current page state.
        return this.currentPageReference &&
            this.currentPageReference.state.c__showPanel == "true";
    }

    // Returns a page reference that matches the current page
    // but sets the "c__showPanel" page state property to "true"
    get showPanelPageReference() {
        return getUpdatedPageReference({
            c__showPanel: "true" // Value must be a string
        });
    }

    // Returns a page reference that matches the current page
    // but removes the "c__showPanel" page state property
    get noPanelPageReference() {
        return getUpdatedPageReference({
            // This will cause this property to be removed from the state
            c__showPanel: undefined
        });
    }

    // Utility function that returns a copy of the current page reference
    // after applying the stateChanges to the state on the new copy
    getUpdatedPageReference(stateChanges) {
        // The currentPageReference property is read-only.
        // To navigate to the same page with a modified state,
        // copy the currentPageReference and modify the copy.
        return Object.assign({}, this.currentPageReference, {
            // Copy the existing page state to preserve other parameters
            // If any property on stateChanges is present but has an undefined
            // value, that property in the page state will be removed.
            state: Object.assign({}, this.currentPageReference.state, stateChanges)
        });
    }

    connectedCallback() {
        this[NavigationMixin.GenerateUrl](this.showPanelPageReference)
            .then(url => this.showPanelUrl = url);
        this[NavigationMixin.GenerateUrl](this.noPanelPageReference)
            .then(url => this.noPanelUrl = url);
    }

    handleShowPanelClick(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // This example passes true to the 'replace' argument on the navigate API
        // to change the page state without pushing a new history entry onto the
        // browser history stack. This prevents the user from having to press back
        // twice to return to the previous page.
        this[NavigationMixin.Navigate](this.showPanelPageReference, true);
    }

    handleNoPanelClick(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this[NavigationMixin.Navigate](this.noPanelPageReference, true);
    }
}