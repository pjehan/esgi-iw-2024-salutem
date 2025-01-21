/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.3.1';
import './styles/app.css';

const appointmentForm = document.querySelector('form[name="appointment"]');

if (appointmentForm) {
    const classifier = await pipeline('zero-shot-classification', 'Xenova/mobilebert-uncased-mnli');
    const input = appointmentForm.querySelector('textarea[name="appointment[message]"]');
    const select = appointmentForm.querySelector('select[name="appointment[skill]"]');
    const options = select.querySelectorAll('option');
    const threshold = 1000;
    let timeoutId = null;

    input.addEventListener('input', async (event) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
            const text = event.target.value;
            const labels = options.values().toArray().map(option => option.text);
            const classification = await classifier(text, labels);
            console.log(classification);
            const bestLabel = classification.labels[0];
            select.value = options.values().toArray().find(option => option.text === bestLabel).value;
        }, threshold);
    });
}
