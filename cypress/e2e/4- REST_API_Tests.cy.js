describe('API Testing for Slovak Movies', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    // Test to verify GET method for retrieving all posts
    it('should verify GET method for posts', () => {
      // Sending a GET request to the server to retrieve all posts
      cy.request('GET', `${baseUrl}/posts`).then((response) => {
        // Checking if the server responded with status code 200 (indicating the request was successful)
        expect(response.status).to.eq(200);
        // Checking if the response contains a list of posts (array)
        expect(response.body).to.be.an('array');
        // Checking if the array has a length greater than 0
        expect(response.body).to.have.length.greaterThan(0);
      });
    });
    // Test to verify POST method for creating new posts about Slovak movies
    it('should verify POST method for creating new posts about Slovak movies', () => {
        // Load movies data from fixture
        cy.fixture('movies').then((movies) => {
          // Iterating over each movie and creating a post for each
          movies.forEach(movie => {
            // Sending a POST request to the server to create a new post
            cy.request('POST', `${baseUrl}/posts`, movie).then((response) => {
              // Checking if the server responded with status code 201 (indicating the post was successfully created)
              expect(response.status).to.eq(201);
              // Checking if the response contains the same data we sent
              expect(response.body).to.include(movie);
            });
          });
        });
      });
    
  
    // Test to verify PUT method for updating an existing post
    it('should verify PUT method for updating a post with new details about a Slovak movie', () => {
      // Details of the updated post
      const updatedMovie = {
        id: 1,
        title: 'Updated Správa',
        body: 'An updated historical drama about the escape from Auschwitz.',
        userId: 1
      };
  
      // Sending a PUT request to the server to update the post with ID 1
      cy.request('PUT', `${baseUrl}/posts/1`, updatedMovie).then((response) => {
        // Checking if the server responded with status code 200 (indicating the post was successfully updated)
        expect(response.status).to.eq(200);
        // Checking if the response body includes the updated data
        expect(response.body.title).to.eq(updatedMovie.title);
        expect(response.body.body).to.eq(updatedMovie.body);
        expect(response.body.userId).to.eq(updatedMovie.userId);
      });
    });
  
    // Test to verify DELETE method for deleting a post
    it('should verify DELETE method for deleting a post', () => {
      // Details of the post to create and delete
      const movieToDelete = {
        title: 'Temporary Movie',
        body: 'This is a temporary post to be deleted.',
        userId: 1
      };
  
      // Create a new post
      cy.request('POST', `${baseUrl}/posts`, movieToDelete).then((response) => {
        // Check that the post was created successfully
        expect(response.status).to.eq(201);
        const postId = response.body.id;
  
        // Delete the newly created post
        cy.request('DELETE', `${baseUrl}/posts/${postId}`).then((deleteResponse) => {
          // Check that the post was deleted successfully
          expect(deleteResponse.status).to.eq(200);
  
          
          });
        });
      });
    });
  
  