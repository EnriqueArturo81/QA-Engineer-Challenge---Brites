import 'cypress-xpath';
const imdb = require('./pagesModels/imbd.js');

describe('QA Engineer Challenge - Automation tests Frontend', () => {

      beforeEach('Should open IMDB web page movies', () => {

        cy.intercept('GET', '/').as('pageLoad');
        cy.visit("/")
        cy.wait('@pageLoad').its('response.statusCode').should('eq', 200);

      })


      it.only('Select the first Nicolas Cage movie listed in the credits section', () => {
      
            imdb.searchForActor('Nicolas Cage');
            imdb.selectFirstResult();
            imdb.openCredits();
            imdb.openSortMenu();
            imdb.navigateToFullCredits();
            imdb.navigateToSpecificMovie();
            imdb.verifyMovieTitle('Lords of War');

      })

      it.only('Rank the second movie on the list of box office movies with 5 stars in the Top box office menu', () => {

            imdb.openMenu();
            imdb.selectMoviesMenuItem();
            imdb.selectFirstMovie();
            imdb.openRatingSection();
            imdb.rateMovie();
            imdb.verifyRating('5');
            imdb.submitRating();
            imdb.verifyUrlDestiny('/registration/signin')
            

            
      })

      it.only('Display the second photo Danny Trejo in Breaking Bad series, section the Top 250 TV Shows', () => {

            imdb.openMenu();
            imdb.navigateToTopTvChart();
            imdb.verifyTopTvChartUrl();
            imdb.selectFirstShow();
            imdb.openHeroPhoto();
            imdb.openGallery();
            imdb.openImageDropdown();
            imdb.selectActorFromDropdown('Danny Trejo (6)');
            imdb.clearSelection();
            imdb.selectSpecificImage();
            imdb.verifyUrlDestiny('/title/tt0903747/mediaviewer/rm123229952/?ref_=ttmi_mi_all_2');
            imdb.takeScreenshot();

      })

      it.only('Search the 3rd for Celebrities born yesterday and take a screenshot.', () => {

       
            imdb.openMenu();
            imdb.navigateToBornOnDate();
            imdb.selectAllMonths();
            imdb.verifyUrlDestiny('search/name/');
            imdb.openBirthdayAccordion();
        
            
            let date = new Date();
            date.setDate(date.getDate() - 1); 
            let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
            let day = date.getDate().toString().padStart(2, '0');
            let formattedDate = `${month}-${day}`;
        
           
            imdb.typeBirthday(formattedDate);
            imdb.clickSearchButton();
            imdb.selectThirdResult();
            imdb.verifyUrlDestiny('ref_=sr_t_3');
            imdb.takeScreenshot();
           
      })

      it.only('Search the first for Celebrities borns the same day as today but exactly 40 years ago', () => {

            const today = new Date();
            today.setFullYear(today.getFullYear() - 40);
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');      
            const formattedDate = `${year}-${month}-${day}`;

           
            imdb.openMenu();
            imdb.navigateToBornOnDate();
            imdb.selectAllMonths();
            imdb.openBirthDateAccordion();
            imdb.setBirthDateRange(formattedDate, formattedDate);
            imdb.clickSearchButton();
            imdb.selectFirstResultLink();
            imdb.takeScreenshot();
      })


})