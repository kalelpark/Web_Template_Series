const searchInput = document.querySelector('#search-input');

searchInput.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        search();
    }
})


function search() {
    const input = searchInput.value;

    window.location.href = window.location.href = `https://www.google.com/search?q=${input}&sxsrf=ALiCzsa3nLFg0TzC5dw20XkJMkB56vqoSg%3A1654042736999&ei=cLCWYrfMPK7T2roPw6-mmAw&ved=0ahUKEwi3xKCu_Yr4AhWuqVYBHcOXCcMQ4dUDCA4&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggILhCABBDUAjIFCAAQgAQyBwgAEIAEEAoyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARDRAzoUCC4QgAQQsQMQgwEQxwEQowIQ1AI6CAgAEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoECAAQAzoFCC4QgAQ6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToECC4QAzoECAAQCjoHCAAQsQMQCjoKCAAQsQMQgwEQCkoECEEYAEoECEYYAFAAWL4SYPcTaAJwAHgBgAGwAYgBmAuSAQQwLjEymAEAoAEBwAEB&sclient=gws-wiz`;
}