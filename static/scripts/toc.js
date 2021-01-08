function ready(fn) {
    fn();
}

ready(() => {
    console.log('called');
    const motionQuery = window.matchMedia('(prefers-reduced-motion)')

    const TableOfContents = {
        container: document.querySelector('.toc'),
        links: null,
        headings: null,
        intersectionOptions: {
            rootMargin: '0px',
            threshold: 1
        },
        previousSection: null,
        observer: null,

        init() {
            this.handleObserver = this.handleObserver.bind(this)

            this.setUpObserver()
            this.findLinksAndHeadings()
            this.observeSections()


            this.links.forEach(link => {
                link.addEventListener('click', this.handleLinkClick.bind(this))
            })
        },

        handleLinkClick(evt) {
            evt.preventDefault()
            let id = evt.target.getAttribute('href').replace('#', '')

            let section = this.headings.find(heading => {
                return heading.getAttribute('id') === id
            })

            section.setAttribute('tabindex', -1)
            section.focus()

            window.scroll({
                behavior: motionQuery.matches ? 'instant' : 'smooth',
                top: section.offsetTop - 100,
                block: 'start'
            })

            if (this.container.classList.contains('active')) {
                this.container.classList.remove('active')
            }
        },

        handleObserver(entries, observer) {
            entries.forEach(entry => {
                let href = `#${entry.target.getAttribute('id')}`,
                    link = this.links.find(l => l.getAttribute('href') === href)


                if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                    link.parentElement.classList.add('visible')
                    this.previousSection = entry.target.getAttribute('id')
                } else {
                    link.parentElement.classList.remove('visible')
                }

                this.highlightFirstActive()
            })
        },

        highlightFirstActive() {
            let firstVisibleLink = this.container.querySelector('.visible')

            this.links.forEach(link => {
                link.parentElement.classList.remove('active')
            })

            if (firstVisibleLink) {
                firstVisibleLink.classList.add('active')
            }

            if (!firstVisibleLink && this.previousSection) {
                this.container.querySelector(
                    `a[href="#${this.previousSection}"]`
                ).parentElement.classList.add('active')
            }
        },

        observeSections() {
            this.headings.forEach(heading => {
                this.observer.observe(heading)
            })
        },

        setUpObserver() {
            this.observer = new IntersectionObserver(
                this.handleObserver,
                this.intersectionOptions
            )
        },

        findLinksAndHeadings() {
            this.links = [...this.container.querySelectorAll('a')]
            this.headings = this.links.map(link => {
                let id = link.getAttribute('href')
                return document.querySelector(id)
            })
        }
    }

    TableOfContents.init()
});