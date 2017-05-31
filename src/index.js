// ================================
// Entry point
// ================================

module.exports = class RevealFooter {

    constructor( selector, opts = false ){

        // make sure we have opts to check
        this.opts = opts || {}

        // save footer
        this.footer = document.querySelector(selector)

        // missing footer handler
        if( this.footer === null ){
            console.warn( `No element with selector '${selector}' found.`)
            return
        }

        // find neighbor
        this.neighbor = this.opts.neighbor ? document.querySelector(this.opts.neighbor) : this.footer.previousElementSibling

        if( this.neighbor === null ){
            console.warn( `No neighbor element with selector '${this.opts.neighbor}' found.`)
            return
        }

        // Set footer styling
        this.footer.style.position = 'fixed'
        this.footer.style.bottom = opts.hasOwnProperty('bottom') ? `${this.opts.bottom}px` : 0

        // Set neighbor styling
        this.neighbor.style.position = this.opts.neighborPosition ? this.opts.neighborPosition : 'relative'
        this.neighbor.style.zIndex = this.opts.hasOwnProperty('neighborZIndex') ? this.opts.neighborZIndex : 5
        this.updateNeighborMargin()

        // Attach resize listener
        window.onresize = () => {
            this.updateNeighborMargin()
        }

    }

    calculateFooterHeight(){
        const bottom = this.opts.bottom || 0
        const height = this.footer.getBoundingClientRect().height
        return bottom + height
    }

    updateNeighborMargin(){
        this.neighbor.style.marginBottom = `${this.calculateFooterHeight()}px`
    }

}
