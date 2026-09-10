---
layout: page
title: Thingking
---
<div id="machina-config"
     data-machine-settings="{{ site.machine | jsonify | escape }}"
     data-github-settings="{{ site.github_settings | jsonify | escape }}"
     data-app-settings="{{ site.app | jsonify | escape }}"
     data-lm-settings="{{ site.lm | jsonify | escape }}"
     data-worker-url="{{ '/assets/js/' | append: site.app.worker_name | relative_url }}"
     style="display:none;">
</div>

<div id="tokenPopupOverlay" class="popup-overlay" style="display: none;">
    <div class="popup">
        <h3>Enter your identification (API) token</h3>
        <input type="text" id="tokenPopupInput" placeholder="Paste your API token here, it will be used until the end of this session...">
        <div style="margin-top: 10px;">
            <button id="tokenPopupSaveButton" style="margin-right: 10px;">Use this token, go on</button>
            <button id="tokenPopupCancelButton">Cancel</button>
        </div>
    </div>
</div>

<div id="instructionsPopupOverlay" class="popup-overlay" style="display: none;">
    <div class="popup">
        <h3>Paste your 'system' instructions for the model here.</h3>
        <textarea id="instructionsPopupInput" rows="17" placeholder="Paste your instructions here, they will be used until the end of this session..."></textarea>
        <div style="margin-top: 10px;">
            <button id="instructionsPopupSaveButton" style="margin-right: 10px;">Use these instructions</button>
            <button id="instructionsPopupFileButton" style="margin-right: 10px;">File</button>
            <button id="instructionsPopupCancelButton">Cancel</button>
        </div>
    </div>
</div>

<div id="loading-overlay" class="popup-overlay" style="display: none;">
    <div class="popup">
        <h4>{{ site.machine.name }} is thingking...</h4>
    </div>
</div>

<div id="dialogue-content-wrapper"></div>

<textarea id="dialogue-editor-textarea" class="form-control" style="display: none;"></textarea>

<div id="file-picker-container" style="display: none;">
  <button id="chooseFileButton" class="btn btn-primary">Choose File to Load Dialogue</button>
</div>

<script src="{{ '/assets/js/storage.js' | relative_url }}"></script>