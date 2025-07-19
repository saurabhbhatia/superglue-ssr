Humid.configure do |config|
  # Path to your builds file located in `app/assets/builds/`. You should use a
  # separate builds apart from your `application.js`.
  #
  # Required
  config.application_path = Rails.root.join("app", "assets", "builds", "server_rendering.js")

  # Path to your source map file
  #
  # Optional
  config.source_map_path = Rails.root.join("app", "assets", "builds", "server_rendering.js.map")

  # Raise errors if JS rendering failed. If false, the error will be
  # logged out to Rails log and Humid.render will return an empty string
  #
  # Defaults to true.
  config.raise_render_errors = Rails.env.development? || Rails.env.test?

  # The logger instance.
  # `console.log` and friends (`warn`, `error`) are delegated to
  # the respective logger levels on the ruby side.
  #
  # Defaults to `Logger.new(STDOUT)`
  config.logger = Rails.logger

  # Options passed to mini_racer.
  #
  # Defaults to empty `{}`.
  config.context_options = {
    timeout: 1000,
    ensure_gc_after_idle: 2000
  }
end

# Capybara defines its own puma config which is set up to run a single puma process
# with a thread pool. This ensures that a context gets created on that process.
if Rails.env.test?
  # Use single_threaded mode for Spring and other forked envs.
  MiniRacer::Platform.set_flags! :single_threaded
  Humid.create_context
end
