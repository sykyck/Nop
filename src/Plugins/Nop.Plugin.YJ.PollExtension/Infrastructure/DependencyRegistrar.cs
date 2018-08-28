using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Nop.Core.Configuration;
using Nop.Core.Infrastructure;
using Nop.Core.Infrastructure.DependencyManagement;
using Nop.Plugin.YJ.PollExtension.Services;
using Nop.Plugin.YJ.PollExtension.Data;
using Nop.Web.Framework.Infrastructure.Extensions;

namespace Nop.Plugin.YJ.PollExtension.Infrastructure
{
    public class DependencyRegistrar : IDependencyRegistrar
    {
        private const string CONTEXT_NAME = "nop_object_context_yj_pollextension";
        /// <summary>
        /// Register services and interfaces
        /// </summary>
        /// <param name="builder">Container builder</param>
        /// <param name="typeFinder">Type finder</param>
        /// <param name="config">Config</param>
        public virtual void Register(ContainerBuilder builder, ITypeFinder typeFinder, NopConfig config)
        {
            //register PollExtensionService
            builder.RegisterType<PollExtensionService>().As<IPollExtensionService>().InstancePerLifetimeScope();

            //data context
            builder.RegisterPluginDataContext<PollExtensionObjectContext>(CONTEXT_NAME);
        }

        /// <summary>
        /// Order of this dependency registrar implementation
        /// </summary>
        public int Order
        {
            get { return 1; }
        }
    }
}
