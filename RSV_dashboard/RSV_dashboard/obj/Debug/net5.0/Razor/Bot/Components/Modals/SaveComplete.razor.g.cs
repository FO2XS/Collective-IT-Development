#pragma checksum "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\Bot\Components\Modals\SaveComplete.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f6e601bb8b34fa5aa1a5ddb63e200612be9e5c1d"
// <auto-generated/>
#pragma warning disable 1591
namespace RSV_dashboard.Bot.Components.Modals
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using RSV_dashboard;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using RSV_dashboard.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\_Imports.razor"
using MudBlazor;

#line default
#line hidden
#nullable disable
    public partial class SaveComplete : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<style>\n    #parent {\n    text-align:center;\n    height:450px;\n    width:100%;\n}\n</style>\n    ");
            __builder.OpenElement(1, "div");
            __builder.AddAttribute(2, "id", "parent");
            __builder.AddMarkupContent(3, "<h3 class=\"display-4\">Save Complete</h3>\n        ");
            __builder.OpenElement(4, "button");
            __builder.AddAttribute(5, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 10 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\Bot\Components\Modals\SaveComplete.razor"
                           Close

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(6, "class", "btn btn-primary");
            __builder.AddContent(7, "Close");
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 13 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\Bot\Components\Modals\SaveComplete.razor"
       
    private void Close()
    {
        //ModalService.Cancel();
    }

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
