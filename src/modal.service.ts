export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        const modalToRemove = this.modals.find(function(o) { return o.id === id});
        this.modals = this.modals.filter(function (val) { return val !== modalToRemove });
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(function(o) { return o.id === id});
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(function(o) { return o.id === id});
        modal.close();
    }
}
