const inputs = document.querySelectorAll('.controls input');

function handleChange(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log("Changaa!")
}

inputs.forEach(input => input.addEventListener('click', handleChange))
inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))
