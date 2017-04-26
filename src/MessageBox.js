/**
 * Created by rroussel on 24/04/2017.
 */

/*EITHER*/
/*import ParentMessageBox from 'core-hybrid/lib/MessageBox'*/
/*OR*/
const h = require('core-hybrid')
const dialog = require('electron').remote.dialog

const baseOptions = {
    title: 'Dialog box',
    type: 'info'
}

export default class MessageBox extends h.MessageBox{

    constructor(message, options = {}){
        super(message)
        this._options = baseOptions
        this._options.message = this._message
    }

    show(){
        console.log("Electron Message Box")
        dialog.showMessageBox(this._options)
    }
}