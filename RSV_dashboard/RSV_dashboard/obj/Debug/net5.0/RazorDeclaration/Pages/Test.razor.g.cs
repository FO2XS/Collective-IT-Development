// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace RSV_dashboard.Pages
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/Test")]
    public partial class Test : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 338 "D:\Университет\4 семестр\Коллективная ID-деятельность\Collective-IT-Development\RSV_dashboard\RSV_dashboard\Pages\Test.razor"
       
    public List<ChartSeries> AVGUsers = new List<ChartSeries>() {
            new ChartSeries() { Name = "Средняя посещаемость", Data = new double[] { 40, 20, 25, 27, 46, 60, 48, 80, 15 } }
        };
    public string[] XAxisAVGUsers = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" };

    int dataSize = 8;
    double[] data = { 5, 20, 4, 21, 12, 13, 12, 13 };

    string[] labels = { "Бизнес", "Управление", "Реализация проектов", "Социология", "Саморазвитие", "Планирование",
        "Коммуникация", "Карьера", "Логика", "Развитие компетенций", "Финансы", "Actinium", "Protactinium",
        "Neptunium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Mudblaznium" };

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591