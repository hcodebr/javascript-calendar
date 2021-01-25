export function getCurrentMonth() {

    const urlParams = new URLSearchParams(window.location.search);
    const month = urlParams.get('month');

    if (month) {

        return new Date(month);

    } else {

        return new Date();

    }

}
