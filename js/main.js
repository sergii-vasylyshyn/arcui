const curLang = lmEn;

const html = `

<input type="checkbox" class="h fade-detector" id="modal-1">
<div class="fade-observer">
    <div class="modal-shadow">
        <div class="modal-window">
            <div class="modal-head">
                <div class="modal-head-place">
                    <h3 class='ta-center'>{$modal} {=title=}</h3>
                </div>
                <label for="modal-1" class="modal-close">&#9932;</label>
            </div>
            <div class="modal-body">{=lorem=}</div>
            <div class="modal-footer">
                <label for="modal-1" class="button">{=modal=} {=close=}</label>
            </div>
        </div>
    </div>
</div>

<div class="place-a">
    <label for="modal-1" class="button">{=modal=} {=open=}</label>
</div> `

document.body.innerHTML = html;
