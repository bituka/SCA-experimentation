
<div class="home">
    <h2>Bucket Manager</h2>
    <form>
        <fieldset>
        <div data-view="CaseBucket.Collection"></div>
        <!--
        <fieldset>
            
            
            <div data-input="favething" data-validation="control-group">
                <label for="favething">{{translate 'Favorite Thing'}}</label>
                <span data-validation="control"><input type="text" name="favething" id="favething" value="{{favething}}"></span>
            </div>
            <div data-input="favereason" data-validation="control-group">
                <label for="favereason">{{translate 'Reason'}}</label>
                <span data-validation="control"><input type="text" name="favereason" id="favereason" value="{{favereason}}"></span>
            </div>
        </fieldset>
        <button type="submit">{{#if isNew}}{{translate 'Add'}}{{else}}{{translate 'Update'}}{{/if}}</button>
        -->
        

        <button type="submit" data-action="updateGrabbedCase">{{translate 'Enter Case Grabbed'}}</button>
        </fieldset>
    </form>
</div>