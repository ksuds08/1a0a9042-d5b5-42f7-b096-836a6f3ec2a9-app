document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const templateSection = document.getElementById('templateSection');
    const templateContent = document.getElementById('templateContent');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const industry = document.getElementById('industry').value;
        const experience = document.getElementById('experience').value;
        const style = document.getElementById('style').value;

        try {
            const response = await fetch('/functions/api/handler.ts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ industry, experience, style })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            templateContent.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            templateSection.classList.remove('hidden');
        } catch (error) {
            console.error('Error fetching the template:', error);
        }
    });
});