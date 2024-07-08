// cypress/e2e/pages/searchPage.js

class Imdb {
    elements = {
      searchInput: () => cy.get('#suggestion-search'),
      searchButton: () => cy.get('#suggestion-search-button > .ipc-icon'),
      firstResult: () => cy.get("section:nth-of-type(2)  ul[role='presentation'] > li:nth-of-type(1) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > a[role='button']"),
      creditsTab: () => cy.get('#credits'),
      sortMenu: () => cy.get('[data-testid="nm_flmg_srt_menu"]'),
      fullCreditsLink: () => cy.get('[href="/name/nm0000115/fullcredits?ref_=nm_flmg_sort_text_view"]'),
      specificMovieLink: () => cy.get('[href="/title/tt27706987/?ref_=nm_flmg_act_1"]'),
      movieTitle: () => cy.get('[data-testid="hero__primary-text"]'),

      menuButton: () => cy.get("label#imdbHeader-navDrawerOpen > .ipc-responsive-button__text"),
      moviesMenuItem: () => cy.get("div:nth-of-type(2) > div > div:nth-of-type(1) > .navlinkcat__targetWrapper > .navlinkcat__listContainer > div[role='presentation'] > ul[role='menu'] > a:nth-of-type(5) > span[role='presentation']"),
      firstMovieResult: () => cy.get('li:nth-of-type(2) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .cli-children.hBZnfJ.sc-b189961a-0 > .cli-title.iALATN.ipc-title.ipc-title--base.ipc-title--on-textPrimary.ipc-title--title.ipc-title-link-no-icon.sc-b189961a-9 > .ipc-title-link-wrapper > .ipc-title__text'),
      ratingSection: () => cy.get("div[class='sc-3a4309f8-0 bjXIAP sc-1f50b7c-1 bfrqUc'] div[class='sc-4f0b1185-5 jfRfSn']"),
      fifthStarButton: () => cy.get(".ipc-starbar__rating > button:nth-of-type(5)"),
      ratingDisplay: () => cy.get('.ipc-rating-display__rating'),
      submitRatingButton: () => cy.get(".ipc-rating-prompt__rating-container > button[role='button']"),

      topTvChartLink: () => cy.get('a[href="/chart/toptv/?ref_=nv_tvv_250"]'),
      firstShowLink: () => cy.get('a[href="/title/tt0903747/?ref_=chttvtp_t_1"]'),
      heroPhotoLink: () => cy.get('a[data-testid="hero__photo-link"]'),
      galleryButton: () => cy.get('a[data-testid="mv-gallery-button"]'),
      imageChipDropdown: () => cy.get('button[data-testid="image-chip-dropdown-test-id"]'),
      selectDropdown: () => cy.get('div.ipc-select__input-container select[data-testid="select-dropdown-test-id"]').eq(0),
      clearIcon: () => cy.get(".ipc-icon.ipc-icon--clear[xmlns='http://www.w3.org/2000/svg']"),
      specificImageLink: () => cy.xpath('//a[@id="rm123229952-img-1"]'),

      bornOnDateLink: () => cy.get('a[href="/feature/bornondate/?ref_=nv_cel_brn"]'),
      allMonthsButton: () => cy.get(".ipc-chip-list__scroller > button[role='button']"),
      birthdayAccordion: () => cy.get("div#birthdayAccordion  label[role='button']  .dWrCpn.sc-6addea7c-0"),
      birthdayInput: () => cy.get("input[name='birthday-input']"),
      searchButtonAvd: () => cy.get('button[data-testid="adv-search-get-results"]'),
      thirdResult: () => cy.get('li:nth-of-type(3) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .dli-parent.fsyPsS.sc-77f37b3d-0 > .hiJCwX.sc-77f37b3d-1 > .hABHeV.sc-ada31d55-0 > .grUWLi.sc-ada31d55-3 > .cqzbdJ.ipc-title.ipc-title--base.ipc-title--on-textPrimary.ipc-title--title.ipc-title-link-no-icon.sc-ada31d55-2 > .ipc-title-link-wrapper > .ipc-title__text'),

      bornOnDateLink: () => cy.get('a[href="/feature/bornondate/?ref_=nv_cel_brn"]'),
      allMonthsButton: () => cy.get(".ipc-chip-list__scroller > button[role='button']"),
      birthDateAccordion: () => cy.get('label[data-testid="accordion-item-birthDateAccordion"]'),
      birthDateStartInput: () => cy.get('input[data-testid="birthDate-start"]'),
      birthDateEndInput: () => cy.get('input[data-testid="birthDate-end"]'),
    //  searchButton: () => cy.get('[data-testid="adv-search-get-results"]'),
      firstResultLink: () => cy.get('a[href="/name/nm1232226/?ref_=sr_t_1"]')

    };
  
    searchForActor(actorName) {
      this.elements.searchInput().should('be.visible').click().type(actorName);
      this.elements.searchButton().click();
    }
  
    selectFirstResult() {
      this.elements.firstResult().should('be.visible').click();
    }
  
    openCredits() {
      this.elements.creditsTab().should('be.visible').click();
    }
  
    openSortMenu() {
      this.elements.sortMenu().should('be.visible').click();
    }
  
    navigateToFullCredits() {
      this.elements.fullCreditsLink().should('be.visible').click();
    }
  
    navigateToSpecificMovie() {
      this.elements.specificMovieLink().should('be.visible').click();
    }
  
    verifyMovieTitle(expectedTitle) {
      this.elements.movieTitle().should('contain', expectedTitle);
    }

    openMenu() {
        this.elements.menuButton().click();
      }
    
      selectMoviesMenuItem() {
        this.elements.moviesMenuItem().click();
      }
    
      selectFirstMovie() {
        this.elements.firstMovieResult().click();
      }
    
      openRatingSection() {
        this.elements.ratingSection().click();
      }

   
    
      rateMovie() {
        this.elements.fifthStarButton().click({ force: true });
      }
    
      verifyRating(expectedRating) {
        this.elements.ratingDisplay().should('contain', expectedRating);
      }
    
      submitRating() {
        this.elements.submitRatingButton().click({ force: true });
      }

      verifyUrlDestiny(urlDestiny) {
        cy.url().should('include', urlDestiny);

      }

      navigateToTopTvChart() {
        this.elements.topTvChartLink().click({ force: true });
      }
    
      verifyTopTvChartUrl() {
        cy.url().should('include', '/chart/toptv');
      }
    
      selectFirstShow() {
        this.elements.firstShowLink().click();
      }
    
      openHeroPhoto() {
        this.elements.heroPhotoLink().click();
      }
    
      openGallery() {
        this.elements.galleryButton().click();
      }
    
      openImageDropdown() {
        this.elements.imageChipDropdown().click();
      }
    
      selectActorFromDropdown(actor) {
        this.elements.selectDropdown().select(actor);
      }
    
      clearSelection() {
        this.elements.clearIcon().click();
      }
    
      selectSpecificImage() {
        this.elements.specificImageLink().click();
      }

      takeScreenshot() {
        cy.screenshot();
      }

      navigateToBornOnDate() {
        this.elements.bornOnDateLink().click({ force: true });
      }
    
      selectAllMonths() {
        this.elements.allMonthsButton().click();
      }
    
      verifySearchPageUrl() {
        cy.url().should('include', '/search/name/');
      }
    
      openBirthdayAccordion() {
        this.elements.birthdayAccordion().click();
      }
    
      typeBirthday(date) {
        this.elements.birthdayInput().type(date);
        this.elements.birthdayInput().blur();
      }
    
      clickSearchButton() {
        this.elements.searchButtonAvd().click();
      }
    
      selectThirdResult() {
        this.elements.thirdResult().click();
      }


        navigateToBornOnDate() {
            this.elements.bornOnDateLink().click({ force: true });
        }

        selectAllMonths() {
            this.elements.allMonthsButton().click();
        }

        openBirthDateAccordion() {
            this.elements.birthDateAccordion().click();
        }

        setBirthDateRange(startDate, endDate) {
            this.elements.birthDateStartInput().type(startDate);
            this.elements.birthDateEndInput().type(endDate);
        }

        clickSearchButton() {
            this.elements.searchButtonAvd().click();
        }

        selectFirstResultLink() {
            this.elements.firstResultLink().click();
        }
    

  }
  
  module.exports = new Imdb();
  