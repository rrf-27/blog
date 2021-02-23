
function ifClick() {
    var x, y;
    x = document.getElementById('menu-options');
    y = document.html;
    
    if (x.style.display === 'block') {
        x.style.display = 'none';
        document.getElementById('posts-content').style.display = 'none';
        if (window.matchMedia('(max-width: 768px)').matches) {
            document.getElementById('social-media-menu-options').style.top = 'calc(100% - 18.438rem)';
        } else {
            document.getElementById('social-media-menu-options').style.top = 'calc(100% - 28.438rem)';
        }
        document.getElementById('first-icon').style.display = 'flex';
        document.getElementById('second-icon').style.display = 'none';
    } else {
        x.style.display = 'block';
        x.style.position = 'fixed';
        y.style.overflow = 'hidden';
    }
}

function optionOpener(initialPage, link) {
    if (initialPage === link) {
        document.getElementById('menu-options').style.display = 'none';
    } else {
        window.open(link, '_self');
    }
}

function showPosts() {
    var postsContentSection, socialMedia, firstIcon, secondIcon;
    
    postsContentSection = document.getElementById('posts-content');
    socialMedia = document.getElementById('social-media-menu-options');
    
    firstIcon = document.getElementById('first-icon');
    secondIcon = document.getElementById('second-icon');
    
    
    if (postsContentSection.style.display === 'flex') {
        postsContentSection.style.display = 'none';
        if (window.matchMedia('(max-width: 768px)').matches) {
            socialMedia.style.top = 'calc(100% - 18.438rem)';
        } else if (window.matchMedia('(max-width: 240)').matches) {
            socialMedia.style.top = 'calc(100% - 7.5rem)';
        } else {
            socialMedia.style.top = 'calc(100% - 28.438rem)';
        }
        
        firstIcon.style.display = 'flex';
        
        secondIcon.style.display = 'none';
    } else {
        postsContentSection.style.display = 'flex';
        socialMedia.style.top = '0';
        
        firstIcon.style.display = 'none';

        secondIcon.style.display = 'flex';
    }
    
}


