using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Nop.Plugin.Api.DTOs.Products
{
    public class SpecificationItemDto
    {
        /// <summary>
        /// Specification attribute id
        /// </summary>
        [JsonProperty("attribute_option_id")]
        public int SpecificationAttributeOptionId { get; set; }
        /// <summary>
        /// Specification attribute name
        /// </summary>
        [JsonProperty("attribute_name")]
        public string SpecificationAttributeName { get; set; }
        /// <summary>
        /// Specification attribute option name
        /// </summary>
        [JsonProperty("attribute_option_name")]
        public string SpecificationAttributeOptionName { get; set; }
        /// <summary>
        /// Specification attribute option color (RGB)
        /// </summary>
        [JsonProperty("attribute_option_color_rgb")]
        public string SpecificationAttributeOptionColorRgb { get; set; }
        /// <summary>
        /// Specification attribute options to filter on
        /// </summary>
        [JsonProperty("attribute_filterIds")]
        public string SpecificationAttributeFilterIds { get; set; }
    }
}
