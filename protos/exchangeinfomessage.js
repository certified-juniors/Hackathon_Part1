// source: ExchangeInfoMessage.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage');
goog.provide('proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.BodyCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ru.sovcombank.hackaton.proto.Event');
goog.require('proto.ru.sovcombank.hackaton.proto.Header');
goog.require('proto.ru.sovcombank.hackaton.proto.Request');
goog.require('proto.ru.sovcombank.hackaton.proto.Response');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_);
};
goog.inherits(proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.displayName = 'proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.BodyCase = {
  BODY_NOT_SET: 0,
  REQUEST: 2,
  RESPONSE: 3,
  EVENT: 4
};

/**
 * @return {proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.BodyCase}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.getBodyCase = function() {
  return /** @type {proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.BodyCase} */(jspb.Message.computeOneofCase(this, proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.ru.sovcombank.hackaton.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.ru.sovcombank.hackaton.proto.Request.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && proto.ru.sovcombank.hackaton.proto.Response.toObject(includeInstance, f),
    event: (f = msg.getEvent()) && proto.ru.sovcombank.hackaton.proto.Event.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage;
  return proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ru.sovcombank.hackaton.proto.Header;
      reader.readMessage(value,proto.ru.sovcombank.hackaton.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.ru.sovcombank.hackaton.proto.Request;
      reader.readMessage(value,proto.ru.sovcombank.hackaton.proto.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 3:
      var value = new proto.ru.sovcombank.hackaton.proto.Response;
      reader.readMessage(value,proto.ru.sovcombank.hackaton.proto.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 4:
      var value = new proto.ru.sovcombank.hackaton.proto.Event;
      reader.readMessage(value,proto.ru.sovcombank.hackaton.proto.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ru.sovcombank.hackaton.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ru.sovcombank.hackaton.proto.Request.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ru.sovcombank.hackaton.proto.Response.serializeBinaryToWriter
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ru.sovcombank.hackaton.proto.Event.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.ru.sovcombank.hackaton.proto.Header}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.getHeader = function() {
  return /** @type{?proto.ru.sovcombank.hackaton.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.ru.sovcombank.hackaton.proto.Header, 1));
};


/**
 * @param {?proto.ru.sovcombank.hackaton.proto.Header|undefined} value
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
*/
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Request request = 2;
 * @return {?proto.ru.sovcombank.hackaton.proto.Request}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.getRequest = function() {
  return /** @type{?proto.ru.sovcombank.hackaton.proto.Request} */ (
    jspb.Message.getWrapperField(this, proto.ru.sovcombank.hackaton.proto.Request, 2));
};


/**
 * @param {?proto.ru.sovcombank.hackaton.proto.Request|undefined} value
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
*/
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.setRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Response response = 3;
 * @return {?proto.ru.sovcombank.hackaton.proto.Response}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.getResponse = function() {
  return /** @type{?proto.ru.sovcombank.hackaton.proto.Response} */ (
    jspb.Message.getWrapperField(this, proto.ru.sovcombank.hackaton.proto.Response, 3));
};


/**
 * @param {?proto.ru.sovcombank.hackaton.proto.Response|undefined} value
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
*/
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.setResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Event event = 4;
 * @return {?proto.ru.sovcombank.hackaton.proto.Event}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.getEvent = function() {
  return /** @type{?proto.ru.sovcombank.hackaton.proto.Event} */ (
    jspb.Message.getWrapperField(this, proto.ru.sovcombank.hackaton.proto.Event, 4));
};


/**
 * @param {?proto.ru.sovcombank.hackaton.proto.Event|undefined} value
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
*/
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.setEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage} returns this
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ru.sovcombank.hackaton.proto.ExchangeInfoMessage.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 4) != null;
};

