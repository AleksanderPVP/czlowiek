module.exports = {
    name: "eval",
    code: `
    $onlyForIDs[540984502252601356;847042688675217439;{title:Błąd} {description:Nie jesteś właścicielem bota!}]
    $if[$checkContains[$message;$clientTo]==true]
        nie
    $else
        $eval[$message]
    $endif`
    }