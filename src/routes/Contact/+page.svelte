    <svelte:head>
	<title>Contact me</title>
</svelte:head>

    <form id="contactForm">
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required>
        
        <label for="body">Your Message:</label>
        <textarea id="body" name="body" rows="6" cols="50" required></textarea>
        
        <button type="submit">Submit</button>
    </form>
