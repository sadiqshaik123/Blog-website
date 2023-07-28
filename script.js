const blogForm = document.getElementById('blog-form');
const blogsContainer = document.getElementById('blogs-container');
const showMoreButton = document.getElementById('show-more');

let blogsData = []; // To store the blogs
const blogsPerPage = 3;
let visibleBlogs = blogsPerPage;

// Function to render blogs on the page
function renderBlogs() {
  blogsContainer.innerHTML = '';
  blogsData.slice(0, visibleBlogs).forEach(blog => {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-item');

    const title = document.createElement('h3');
    title.textContent = blog.title;
    blogItem.appendChild(title);

    const content = document.createElement('p');
    content.textContent = blog.content;
    blogItem.appendChild(content);

    const image = document.createElement('img');
    image.src = blog.image;
    blogItem.appendChild(image);

    blogsContainer.appendChild(blogItem);
  });

  // Show the "Show More" button only if there are more blogs to display
  if (visibleBlogs < blogsData.length) {
    showMoreButton.style.display = 'block';
  } else {
    showMoreButton.style.display = 'none';
  }
}

// Function to handle form submission
// Function to handle the "Upload Image" button click
function handleUploadButtonClick() {
    const imageInput = document.getElementById('blog-image');
    imageInput.click();
}

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve form data
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const image = document.getElementById('blog-image').value; // This will give the selected file path

    // You can now process the form data, e.g., send it to a server via AJAX or perform any other desired action.
    // For this example, we'll just log the data to the console.
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);

    // Clear the form fields after submission (optional)
    document.getElementById('blog-form').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('upload-button');
    const form = document.getElementById('blog-form');

    uploadButton.addEventListener('click', handleUploadButtonClick);
    form.addEventListener('submit', handleFormSubmit);
});

  

// Function to handle 'Show More' button click
function handleShowMore() {
  visibleBlogs += blogsPerPage;
  renderBlogs();
}

// Attach event listeners
blogForm.addEventListener('submit', handleFormSubmit);
showMoreButton.addEventListener('click', handleShowMore);

// Initial render
renderBlogs();

// Define a function to initialize the blog display
function initializeBlogDisplay(blogsData) {
    const blogsContainer = document.getElementById('blogs-container');
    
    // Loop through the blogs data and create blog elements to display on the page
    blogsData.forEach(blog => {
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog-entry');
  
      const blogTitle = document.createElement('h3');
      blogTitle.textContent = blog.title;
      
      const blogContent = document.createElement('p');
      blogContent.textContent = blog.content;
  
      const blogImage = document.createElement('img');
      blogImage.src = blog.imageURL;
      blogImage.alt = blog.title;
  
      blogDiv.appendChild(blogTitle);
      blogDiv.appendChild(blogContent);
      blogDiv.appendChild(blogImage);
  
      blogsContainer.appendChild(blogDiv);
    });
  }
  
